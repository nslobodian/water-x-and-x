export default interface SearchEngineInterface {
  read(): Promise<any>
  insert(): Promise<any>
}
