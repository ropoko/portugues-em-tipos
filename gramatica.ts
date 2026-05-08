import type { Lexico } from "./lexico"

type Genero  = "masculino" | "feminino"
type Numero  = "singular" | "plural"
type Pessoa  = "1" | "2" | "3"
type Tempo   = "presente" | "pretérito" | "imperfecto" | "futuro"
type Modo    = "indicativo" | "subjuntivo" | "imperativo"

export type Substantivo<G extends Genero, N extends Numero> = {
  genero: G
  numero: N
}

export type Verbo<P extends Pessoa, N extends Numero, T extends Tempo> = {
  pessoa: P
  numero: N
  tempo: T
}

export type Adjetivo<G extends Genero, N extends Numero> = {
  genero: G
  numero: N
}

export type ArtigoFormal<G extends Genero, N extends Numero> = 
  G extends "masculino" ? N extends "singular" ? "o" : "os" :
  G extends "feminino" ? N extends "singular" ? "a" : "as" :
  never


export type Palavra<T> = {
  [K in keyof Lexico]: Lexico[K] extends T ? K : never
}[keyof Lexico]


export type Frase<G extends Genero, N extends Numero, T extends Tempo, P extends Pessoa> =
  `${ArtigoFormal<G, N>} ${Palavra<Substantivo<G, N>>} ${Palavra<Verbo<P, N, T>>}`
  | `${ArtigoFormal<G, N>} ${Palavra<Substantivo<G, N>>} ${Palavra<Adjetivo<G, N>>}`