export default async function About(){
    await new Promise((resolve)=> setTimeout(resolve,3000));
    return <h1>About Page</h1>
}