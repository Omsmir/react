

interface props {
    name: string;
    age:number;
    isMarried:boolean;
    country: string;
    friends: string[];
}


export enum Country  {
    Brazil = "Brazil",
    Canada = "Canada"
}


export const Func = (name : string): number => {
return 999
}

export const Person = (props: props) => {
    return (
        <div className="New">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <p>{props.isMarried}</p>
            <p>{props.country}</p>
            <div className="friends" style={{
                display:"flex",
                justifyContent:"center",
                flexDirection: "row",
                border: "1px solid #000000"
            }}>{props.friends.map((ele: string) =>{
                return <p style={{
                    marginRight:5
                }}>{ele}</p>
            })}</div>
        </div>
    )
}

