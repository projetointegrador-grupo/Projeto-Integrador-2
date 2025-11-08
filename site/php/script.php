<?php

header('Content-Type: application/json');


$json_dados = file_get_contents('php://input');


$dados_obra = json_decode($json_dados);


$resposta = [
    'status' => 'sucesso',
    'mensagem' => 'Catalogação realizada com sucesso!',
    'dados_recebidos' => $dados_obra 
];

echo json_encode($resposta);
?>