declare module "typeinfo" {


    export module Syntax {

        export interface Node {
            type: string;
            //TODO:...
        }

        export interface Declaration extends Node {
            exported?: boolean;
        }

        export interface DeclarationList extends Node {
            body: Declaration[];
        }

        export interface DeclarationSourceFile extends DeclarationList { }

        export interface ExternalModuleDeclaration extends DeclarationList {
            id: Identifier;
        }

        export interface InternalModuleDeclaration extends DeclarationList {
            id: IdentifierPath;
        }

        export interface InterfaceDeclaration extends Declaration {/***/}

        export interface FunctionDeclaration extends Declaration {
            id: Identifier;
            typeParams: Array<Identifier | TypedIdentifier>;
            params: Array<Identifier | TypedIdentifier>;
            optionals: Array<Identifier | TypedIdentifier>;
            rest: Identifier;
            return: Type;
        }

        export interface VariableDeclaration extends Declaration {/***/}

        export interface EnumDeclaration extends Declaration {/***/}

        export interface ClassDeclaration extends Declaration {/***/}

        export interface ExternalImportDeclaration extends Declaration {/***/}

        export interface InternalImportDeclaration extends Declaration {/***/}

        export interface ExportAssignmentDeclaration extends Declaration {/***/}

        export interface TypeAliasDeclaration extends Declaration {/***/}




        export interface Identifier extends Node {
            name: string;
        }

        export interface TypedIdentifier extends Identifier {
            typeAnnotation: Type;
        }

        export interface IdentifierPath extends Node {
            names: string[];
        }

        export interface Type extends Node {
            /***/
        }
    }
}
