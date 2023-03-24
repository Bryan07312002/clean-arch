export type domainExceptionData = {
    status: number;
    message: any;
    entity?: any;
    fields?: string[];
}

export class DomainException {
    status: number;
    message: string[];
    fields?: string[];
    entity?: any;

    constructor(data: domainExceptionData) {
        this.status = data.status;
        this.message = data.message;
        this.fields = data.fields;
        this.entity = data.entity;
    }
}