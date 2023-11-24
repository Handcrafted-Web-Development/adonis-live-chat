export default function login() {
  return (
      <main>
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
        </form>
      </main>
  )
}
