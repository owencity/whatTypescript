// /* 
//     Reflection and Decorator
// */
// import 'reflect-metadata';

// const restrictParamValueKey = Symbol('restrictParamValue');

// interface RestrictionInfo<T> {
//     index: number;
//     restrictedValues: T[];
// }

// function RestrictParamValue<T>(restrictedValues: T[]) {
//     return (target: any, propertyKey: string, index: number) => {
//         const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
//         const info: RestrictionInfo<T> = {
//             index,
//             restrictedValues,
//         }
//         Reflect.defineMetadata(restrictParamValueKey, [
//             ...prevMeta,
//             info,
//         ], target, propertyKey);
//     }
// }

// function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDecorator) {
//     const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

//     const original = descriptor.value;

//     descriptor.value = function(...args: any) {
//         const invalids = metas.filter(
//             (x) => !x.restrictedValues.includes(args[x.index])
//         );

//         if(invalids.length > 0 ) {
//             throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(',')}`)
//         }
//     }
// }

// class Idol {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

// @ValidateMethod
// sing(@RestrictParamValue(['신나게', '열정적으로']) style: string, aaa: string) {
// //    if(style !== '신나게' && style !== '열정적으로') {

// //    }
// }
// }

// const yuJin = new Idol('유진' ,23 );