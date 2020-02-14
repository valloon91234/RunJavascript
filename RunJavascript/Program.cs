using Microsoft.ClearScript;
using Microsoft.ClearScript.V8;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RunJavascript
{
    class Program
    {
        static void Main(string[] args)
        {
            V8ScriptEngine v8 = new V8ScriptEngine();
            v8.Evaluate(File.ReadAllText("CryptoJS.js"));
            v8.Evaluate(File.ReadAllText("AEScall.js"));
            String result = v8.Script.encryptedText;
            Console.WriteLine(result);
            Console.ReadKey(false);
        }
    }
}
