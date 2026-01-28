package com.example.karenaichattherapyapp.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import com.example.karenaichattherapyapp.BuildConfig

data class Message(val role: String, val text: String, val timestamp: Long = System.currentTimeMillis())

class ChatViewModel : ViewModel() {
    private val _messages = MutableStateFlow<List<Message>>(
        listOf(Message("assistant", "Hi, I’m Karen. I’m here to listen. What’s on your mind today?"))
    )
    val messages: StateFlow<List<Message>> = _messages

    private val ioScope = CoroutineScope(Dispatchers.IO)

    fun sendUserMessage(text: String) {
        if (text.isBlank()) return
        val trimmed = text.trim()
        _messages.update { it + Message("user", trimmed) }

        ioScope.launch {
            // Phase 1 placeholder: later use BuildConfig.GROQ_API_KEY / BRAVE_API_KEY with network client
            val reply = empathicReflect(trimmed)
            _messages.update { it + Message("assistant", reply) }
        }
    }

    private fun empathicReflect(user: String): String {
        val prompt = user.take(240)
        return "I hear you. It sounds like \"$prompt\" is weighing on you. Could you share a bit more about how this is affecting you right now?"
    }
}
