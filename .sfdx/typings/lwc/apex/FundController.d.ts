declare module "@apex/FundController.getFunds" {
  export function getFunds(param: {filters: any, pageSize: any, pageNumber: any}): Promise<any>;
}
declare module "@apex/FundController.getAssetClasses" {
  export function getAssetClasses(): Promise<any>;
}
declare module "@apex/FundController.getSectors" {
  export function getSectors(): Promise<any>;
}
