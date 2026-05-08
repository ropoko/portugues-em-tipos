import type { Frase } from "./gramatica"

const teste1: Frase<"masculino", "plural", "presente", "3"> = 'os gatos correm';

const teste2: Frase<"masculino", "singular", "presente", "3"> = 'o gato corre';

const teste3: Frase<"masculino", "singular", "presente", "3"> = 'o gato bonito';
