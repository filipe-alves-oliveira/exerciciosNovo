<?php
class Pessoa {
    public $nome;
    public $idade;

    public $falando = False;
    public $comendo = False;

    public function __construct($nome, $idade) {
        $this -> nome = $nome; //o this refere-se ao objeto pessoa1
        $this-> idade = $idade;
    }
}