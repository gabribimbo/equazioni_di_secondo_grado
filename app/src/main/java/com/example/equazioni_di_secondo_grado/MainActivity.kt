package com.example.equazioni_di_secondo_grado

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import kotlin.math.sqrt

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //findviewById serve per creare un collegamento

        val a = findViewById<TextView>(R. id.editTextNumberSigned3)//abbiamo messo "id" di A per creare un collegamento
        val b = findViewById<TextView>(R. id.editTextNumberSigned)//abbiamo messo "id" di B per creare un collegamento
        val c = findViewById<TextView>(R. id.editTextNumberSigned4)//abbiamo messo "id" di C per creare un collegamento
        //cosi via con le altre
        val DELTA = findViewById<TextView>(R. id.textView)
        val X1 = findViewById<TextView>(R. id.textView6)
        val X2 = findViewById<TextView>(R. id.textView5)
        val bottone = findViewById<Button>(R. id.button) // al differanza degli altri questo è un button, un altro tipo di view

        bottone.setOnClickListener()// serve per far capire che quando si schiaccia quel bottone noi dobbiamo eseguire certe azioni
        {
            DELTA.text  = (b.text.toString().toDouble() * b.text.toString().toDouble() - (4 * a.text.toString().toDouble() * c.text.toString().toDouble() ) ).toString()

        // text perche siamo interessati al testo

            X1.text= (((-b.text.toString().toDouble() + sqrt(DELTA.text.toString().toDouble()))/(a.text.toString().toDouble()*2))).toString()

            X2.text= (((-b.text.toString().toDouble() - sqrt(DELTA.text.toString().toDouble()))/(a.text.toString().toDouble()*2))).toString()
        }



    }

}