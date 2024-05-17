node{
    stage('Clonar repositorio'){
        checkout scm
    }
    stage('Instalar las dependencias'){
        bat 'npm install'
    }
    stage('Construir aplicacion'){
        bat 'npm run build'
    }
    /*stage('Copiar o mover al servidor'){
        bat 'xcopy '
    }*/

}