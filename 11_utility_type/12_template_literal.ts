/* 
    Template Literal
*/

type CodeFactory = 'Code Factory';

// UpperCase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// LowerCase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// UnCapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;

