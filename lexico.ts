import type { Substantivo, Adjetivo, Verbo } from "./gramatica"

export type Lexico = {
  "gato":   Substantivo<"masculino", "singular">
  "gatos":  Substantivo<"masculino", "plural">
 
  "bonita": Adjetivo<"feminino", "singular">
  "bonito": Adjetivo<"masculino", "singular">
 
  "corro": Verbo<"1", "singular", "presente">
  "corre":  Verbo<"3", "singular", "presente">
  "correm": Verbo<"3", "plural", "presente">
}

export type LexicoLookup<K extends keyof Lexico> = Lexico[K]