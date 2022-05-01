const getFormData = (formId = 'login-form') => {
  const form = document.getElementById(formId);

  return {
    email: form[0].value,
    password: form[1].value,
    submit: form[2],
  };
};

const redirectTo = url => {
  window.location.href = `http://localhost:5500/${url}`;
};

const connect = (email, password) => {
  const users = [
    {
      email: 'adonys@gmail.com',
      password: '123456',
      name: 'Adonys',
      age: '20',
    },
    {
      email: 'jonh@gmail.com',
      password: '123456',
      name: 'Jonh',
      age: '25',
    },
    {
      email: 'maria@gmail.com',
      password: '123456',
      name: 'Maria',
      age: '30',
    },
  ];

  const user = users.find(
    user => user.email === email && user.password === password,
  );

  if (user) {
    redirectTo('index.html');
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    alert('Las credenciales son incorrectas');
    localStorage.removeItem('user');
  }
};

const login = ({ submit }, callback) => {
  submit.addEventListener('click', event => {
    event.preventDefault();
    const { email, password } = getFormData();
    callback(email, password);
  });
};

login(getFormData(), connect);
