import React from 'react'
import { useSelector } from 'react-redux'

const Welcome = () => {
    const {user} = useSelector((state) => state.auth);
  return (
    <div>
        <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hello, <strong>{user && user.name}</strong>
                            </h1>
                            <h2 class="subtitle">
                                I hope you are having a great day!
                            </h2>
                        </div>
                    </div>
                </section>
    </div>
  )
}

export default Welcome