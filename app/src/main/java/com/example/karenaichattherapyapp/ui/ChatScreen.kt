package com.example.karenaichattherapyapp.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Divider
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.karenaichattherapyapp.ui.theme.KarenTheme
import com.example.karenaichattherapyapp.viewmodel.ChatViewModel
import com.example.karenaichattherapyapp.viewmodel.Message
import androidx.compose.foundation.layout.imePadding
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardActions
import androidx.compose.ui.text.input.KeyboardOptions

@Composable
fun KarenApp(viewModel: ChatViewModel = viewModel()) {
    KarenTheme {
        Surface(modifier = Modifier.fillMaxSize()) {
            ChatScreen(viewModel)
        }
    }
}

@Composable
fun ChatScreen(viewModel: ChatViewModel) {
    val messages by viewModel.messages.collectAsStateWithLifecycle()
    var input by remember { mutableStateOf("") }

    Column(modifier = Modifier.fillMaxSize().padding(horizontal = 12.dp)) {
        TopAppBar(title = { Text("Karen — AI Therapy") })
        Divider()
        LazyColumn(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .padding(vertical = 8.dp),
            reverseLayout = false
        ) {
            items(messages) { msg ->
                MessageBubble(msg)
                Spacer(Modifier.height(6.dp))
            }
        }
        Divider()
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .imePadding()
                .padding(vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextField(
                value = input,
                onValueChange = { input = it },
                placeholder = { Text("Share what's on your mind…") },
                modifier = Modifier.weight(1f),
                singleLine = true,
                keyboardOptions = KeyboardOptions(imeAction = ImeAction.Send),
                keyboardActions = KeyboardActions(
                    onSend = {
                        if (input.isNotBlank()) {
                            viewModel.sendUserMessage(input.trim())
                            input = ""
                        }
                    }
                )
            )
            Spacer(Modifier.width(8.dp))
            Button(onClick = {
                if (input.isNotBlank()) {
                    viewModel.sendUserMessage(input.trim())
                    input = ""
                }
            }) { Text("Send") }
        }
    }
}

@Composable
private fun MessageBubble(message: Message) {
    val isUser = message.role == "user"
    val bg = if (isUser) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surfaceVariant
    val fg = if (isUser) MaterialTheme.colorScheme.onPrimaryContainer else MaterialTheme.colorScheme.onSurfaceVariant
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(16.dp))
                .background(bg)
                .padding(horizontal = 12.dp, vertical = 8.dp)
                .widthIn(min = 48.dp, max = 320.dp)
        ) {
            Text(text = message.text, color = fg)
        }
    }
}
