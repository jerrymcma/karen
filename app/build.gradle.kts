plugins {
    alias(libs.plugins.android.application)
    // Kotlin plugins without explicit versions; rely on the classpath/version catalog
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = "com.example.karenaichattherapyapp"
    compileSdk {
        version = release(36)
    }

    // Load local.properties to expose secrets via BuildConfig with safe defaults
    val localProps = java.util.Properties().apply {
        val f = rootProject.file("local.properties")
        if (f.exists()) f.inputStream().use { load(it) }
    }
    fun propOrEmpty(key: String) = (localProps.getProperty(key) ?: "").trim()

    defaultConfig {
        applicationId = "com.example.karenaichattherapyapp"
        minSdk = 24
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"

        // BuildConfig placeholders (Phase 1). Leave empty if not present.
        buildConfigField("String", "GROQ_API_KEY", "\"${propOrEmpty("GROQ_API_KEY")}\"")
        buildConfigField("String", "BRAVE_API_KEY", "\"${propOrEmpty("BRAVE_API_KEY")}\"")
        buildConfigField("String", "GROQ_MODEL", "\"${propOrEmpty("GROQ_MODEL").ifEmpty { "llama-3.3-70b-versatile" }}\"")
        buildConfigField("String", "GROQ_BASE_URL", "\"${propOrEmpty("GROQ_BASE_URL").ifEmpty { "https://api.groq.com/openai/v1" }}\"")
        buildConfigField("String", "BRAVE_GROUNDING_URL", "\"${propOrEmpty("BRAVE_GROUNDING_URL").ifEmpty { "https://api.brave.com/grounding/v1" }}\"")
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildFeatures {
        compose = true
    }

    // Target Java 21 as per project requirements
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_21
        targetCompatibility = JavaVersion.VERSION_21
    }
    kotlin {
        jvmToolchain(21)
    }
}

dependencies {
    // Existing
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.material)
    implementation(libs.androidx.activity)
    implementation(libs.androidx.constraintlayout)
    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)

    // Compose BOM
    implementation(platform("androidx.compose:compose-bom:2024.12.01"))
    // Core Compose UI
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    // Material 3
    implementation("androidx.compose.material3:material3")
    // Activity Compose
    implementation("androidx.activity:activity-compose:1.9.3")
    // Lifecycle/runtime helpers
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.6")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.8.6")

    debugImplementation("androidx.compose.ui:ui-tooling")
    debugImplementation("androidx.compose.ui:ui-test-manifest")
}