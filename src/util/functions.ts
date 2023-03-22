export function ObjectIsEmpty(object: any): boolean {

    if (object === undefined || object === null) return true;

    return Object.keys(object).length === 0;
}

export function isValidCPF(cpf: string) {
    if (typeof cpf !== 'string') return false;

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;

    const newCpf = cpf.split('').map(el => +el)

    const rest = (count: any) => (newCpf.slice(0, count - 12)
        .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
    return rest(10) === newCpf[9] && rest(11) === newCpf[10];
}

export function isValidEmail(email: string) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(email);
}