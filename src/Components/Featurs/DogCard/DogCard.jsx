

function DogCard(props){
  const {FName,type,age} = props;
  let styleObj = {};
  if(age <= 4){
    styleObj = {backgroundColor:"yellow"};
  }
  else{
    styleObj = {backgroundColor:"green"};

  } 
 
    return (
    <div style = {styleObj}>
        <h1>Dog Name:{FName}</h1>
        <h2>Dog Type: {type}</h2>
        <h3>Dog age: {age}</h3>
        

    </div>

    )

}
export default DogCard;