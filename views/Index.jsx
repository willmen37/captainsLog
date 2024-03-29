import React from 'react'

const Index = ({logs}) => {
 console.log(logs.title)
  return (
		<div>
			<nav>
				<a href="/new">New log</a>
			</nav>
			<h1>Index Page</h1>

			<ul>
				{logs.map((log, i) => {
					<li key={i}>
						<a>{log.title}</a>
					</li>
				})}
			</ul>
		</div>
	);
}

export default Index
