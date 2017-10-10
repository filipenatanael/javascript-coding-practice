var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Pessoa;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, sobrenome, data_nascimento, CPF) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.data_atual = new Date();
        _this.data_nascimento = data_nascimento;
        _this.idade = data_nascimento.getFullYear() - _this.data_atual.getFullYear();
        _this.CPF = CPF;
        return _this;
    }
    return PessoaFisica;
}(Pessoa));
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, sobrenome, CNPJ) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this.CNPJ = CNPJ;
        return _this;
    }
    return PessoaJuridica;
}(Pessoa));
