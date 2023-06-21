export const logHello = () => {
  console.log('Hello SAS')
}

function sayHi(user) {
  alert(`Hello, ${user}!`)
}

function sayBye(user) {
  alert(`Bye, ${user}!`)
}

export { sayHi, sayBye } // список экспортируемых переменных
