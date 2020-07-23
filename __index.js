// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const ivan = new User('Ivan', 20);

// function userFactory(name, age) {
//   const obj = {
//     name,
//     age,
//     getName() {
//       return name;
//     }
//   };
//   Object.setPrototypeOf(obj, {});
// }

// const a = { name: 'ivan' };
// const b = userFactory('Ivan', 40);


// function Employee(name) {
//   this.name = name;
//   this.getName = function () {
//     return name;
//   }
// }

// const employeeFactory = {
//   create: (name) => new Employee(name),
//   createWithPrototype: (name) => {
//     const o = new Employee(name);
//     Object.setPrototypeOf(o, {});
//     return o;
//   }
// }

// employeeFactory.create('Ivan');

// class FED {
//   constructor(name) {
//     this.name;
//   }
// }

// class BED {
//   constructor(name) {
//     this.name;
//   }
// }

// function createDeveloper(type, data) {
//   if (type === 'BE') {
//     return new BED(...data);
//   }
//   return new FED(...data);
// }


function withFetch(obj, url) {
  obj.load = function () {
    return fetch(`${url}/${this.id}`).then(res => res.json()).then(data => {
      Object.entries(data).forEach(([key, value]) => { this[key] = value; })
    });
  };

  return obj;
}

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}


const obj1 = withFetch(new User(1), 'https://jsonplaceholder.typicode.com/users');

obj1.load().then(() => {
  console.load(obj1);
});

