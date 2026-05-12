
import fs from 'fs'
import path from 'path'

/*export const cursos = [
    {
       cod:'',
       curso:'',
       cargaHorario:'',
       tipo:'', 
    }
]
*/

const caminho = path.join(import.meta.dirname,'..','database','cursos.json')
// FUNÇÃO PARA LER OS ARQUIVOS 
export function lerCursos(){
    try {
        if (!fs.existsSync(caminho)) {
            fs.writeFileSync(caminho,'[]','utf-8')
        }
        const conteudo = fs.readFileSync(caminho, 'utf-8')
        if (conteudo === '') {
            return []
        }else {
            return JSON.parse(conteudo)
        }
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error)
        return []
    }
}
// FUNÇÃO PARA SALVAR OS ARQUIVOS 
export function salvarCurso(curso){
    console.log(cursos)
    try {
        fs.writeFileSync(caminho, JSON.stringify(cursos, null, 2))
        console.log("Arquivo JSON criado com sucesso!")
    } catch (error) {
        console.error("Erro ao escrever o arquivo:", error)
    }
}