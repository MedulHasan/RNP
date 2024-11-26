package com.location
import android.util.Log
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String, promise: Promise) {
        try {
            Log.d(">>", "Create event called with name: $name and location: $location")
            promise.resolve(name)
        } catch (e: Exception) {
            promise.reject("CREATE_EVENT_ERROR", e.message, e)
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun createCalendarEventSync(name: String, location: String): String {
        return name // Return your value synchronously
    }
}