
import {IWorker, Client as IClient} from "./interfaces";

class Director implements IWorker {
    id: number = 1;
    name: string = "my director";
    address: string = "Modiin";
    salary: number = 15000;
    work(currentWork: string): void {
        console.log("I am a Director, my currentWork is:",currentWork);
    }   
}

class Developer implements IWorker {
    id: number = 2;
    name: string = "my developer";
    address: string = "Bney Brak";
    salary: number = 10000;
    domain: string = "web";
    work(currentWork: string): void {
        console.log("I am a Developer, my currentWork is:",currentWork);
    }   
}

class PrivateClient implements IClient {
    id: number = 3;
    name: string = "my private director";
    address: string = "Eilat";
    responsibleEmployeeId: number = 1;
    client(feedback: string): void {
        console.log("I am a PrivateClient, my feedback is:",feedback);
    }
}
class OrganizationClient implements IClient {
    id: number = 4;
    name: string = "my OrganizationClient";
    address: string = "Jerusalem";
    responsibleEmployeeId: number = 2;
    client(feedback: string): void {
        console.log("I am a OrganizationClient, my feedback is:",feedback);
    }
}

function sendEmail<T extends IClient | IWorker>(user: T): T {
    if(user instanceof Director ){
        console.log("send email to director");
    }
    else{
        console.log("send email to not director");    
    }
    writeDetails(user)   
    return user;
}

function writeDetails(user: IClient | IWorker){
    if("salary" in user){
        console.log("the salary is: ",user.salary);
    }
    else{
        console.log("the responsibleEmployeeId is: ",user.responsibleEmployeeId);
    }
    // For a n in x expression, where n is a string literal or string literal type and x is a union type, the “true” branch narrows to types which have an optional or required property n, and the “false” branch narrows to types which have an optional or missing property n.
}

function logIn(user: IClient | IWorker){
    console.log("in login");
    if(isClient(user)){
        user.client("great");
    }
    else{
        user.work("new game");
    }
}

function isClient(user: IClient | IWorker): user is IClient{ // IWorker אחרת - הטיפוס חייב להיות  IClient אומר שאם התנאי שחוזר מהפונקציה מתקיים - טיפוס הפרמטר שנשלח לפונקציה הוא 
    return (user as IClient).responsibleEmployeeId !== undefined;
}

console.log("\nIWorker object:\n");
let w1: IWorker = new Director();
sendEmail(w1);
logIn(w1);

console.log("\nIClient object:\n");
let c1: PrivateClient = new PrivateClient();
sendEmail(c1);
logIn(c1);


