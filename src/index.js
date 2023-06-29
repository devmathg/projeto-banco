import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/test")

const LivroModel = mongoose.model("Livro", {
    nome: String,
    capa: String,
    paginas: [String],
    autor: String
})

const mobyDick = new LivroModel({
    nome: "mobyDick",
    capa: "http://linkdacapa.com",
    paginas: ["Conteudo da pg1", "Conteudo da pg2"],
    autpr: "Herman Melville"

})

// mobyDick.save().then(
//     console.log("Livro Criado")
// )

const LivroEncontrado = await LivroModel.find()

console.log(LivroEncontrado)