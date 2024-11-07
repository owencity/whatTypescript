/* 
    Parameter Type
*/

function sampleFunction(x: number, y: string, z: boolean) {

}

type params = Parameters<typeof sampleFunction>;
type params2 = Parameters<(one: number) => void>;

