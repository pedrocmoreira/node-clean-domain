export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Recebe uma string e normaliza como um slug
   *
   * Exemplo: "Um título de exemplo" => "um-titulo-de-exemplo"
   *
   * @param text
   *
   */

  static createFromText(text: string) {
    // a função normalize padroniza a strign removendo os caracteres que não sejam aceitos dentro de uma convenção de caracteres
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
