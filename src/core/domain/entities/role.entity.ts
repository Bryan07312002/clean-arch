import {DomainException} from "../exceptions/exception.interface"

export type rolesProps = {
    id: number;
    name: string;
}

export class Role {
    props: Required<rolesProps>;
    constructor(params: rolesProps) {
        this.props = params;
    }

    static AdminFactory() {
        return new Role({id: 1,name: "admin"});
    }

    static ControladorFactory() {
        return new Role({id: 2,name: "controlador"});
    }
    
    static OperadorFactory() {
        return new Role({id: 3,name: "operador"});
    }

    static match(id: number) {
        switch (id) {
            case 1:
                return this.AdminFactory();
                break;
            case 2:
                return this.ControladorFactory();
                break;
            case 3:
                return this.OperadorFactory();
                break;
            default:
                throw new DomainException({
                    status: 422,
                    message: `given input ${id} is not a valid id`,
                    fields: ["id"],
                    entity: ["Role"]
                });
        }
    }
}