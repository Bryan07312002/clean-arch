import { Role } from "./role.entity";

export type UserProps = {
    id?: number;
    username: string;
    password: string;
    role?: Role | number;
    active?: boolean;
};

export class User {
    props: Required<UserProps>;

    constructor(props: UserProps) {
        let role;
        if (!isNaN(Number(props.role))) {
            role = Role.match(props.role as number);
        }

        this.props = {
            ...props,
            id: props.id ?? -1,
            // if no role is defined, make controlador the dofault one
            role: props.role ?? Role.ControladorFactory(),
            active: props.active || true
        };
    }
}