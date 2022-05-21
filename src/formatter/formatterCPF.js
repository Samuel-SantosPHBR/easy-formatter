function formatterCPF(cpf) {
    const newCpf = String(cpf).replace(/[^\d]/g, "");
    if(newCpf.length<11){
        return false;
    }
    return newCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

module.exports = formatterCPF;