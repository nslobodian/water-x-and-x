export interface StandardError {
  type: string
  errors: ValidationElement[] | string[]
}

export interface ValidationElement {
  property?: string
  constraints?: { [type: string]: string }
}
