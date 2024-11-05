//If i want to set up a profile page with data from the clerk you need: 

//auth()--> userId
//currentUser -->username, email address..etc and what ever personal info I want the use to see on their profile page 


export default async function UserPage(){
// const user = await currrentUser();
//i can console.log usr to se what it looks like inside
return(
<h1>User Page</h1>
<h2>Welcome, {user.firstName}
{user.lastName}
</h2>
<p>{user.emailAddresses[0].emailAddresses}</p>


)

}