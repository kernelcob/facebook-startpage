import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex">
        <h1>Horas</h1>
        <a href="/users">Users</a>
      <div className="leftcard">
        <div>
          <h2 className="text">Facebook</h2>
        </div>
        <div>
        <h3>Facebook helps you connect and share with the people in your life.</h3>
        </div>
      </div>
      <div className="rightcard">
        <div>
        <input type="text" name="email" id="email" data-testid="royal_email" placeholder="Email address or phone number" aria-label="Email address or phone number"/>
        </div>
        <div>
        <input type="password" name="password" id="password" data-testid="royal_pass" placeholder="Password" aria-label="Password"/>
        </div>
        <div>
          <button>Log In</button>
          <br></br>
          <a href="#">Forgotten password?</a>
          <br></br>
        </div>
        <div>
          <a role="button">
            Create new account
          </a>
        </div>
      </div>
      </div>
    </main>
  )
}
