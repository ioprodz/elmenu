export interface Command<Input, Output> {
  execute(input: Input): Output;
}

export interface Query<Input, Output> {
  execute(input: Input): Output;
}
