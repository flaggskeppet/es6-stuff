const createMock = (obj, method, mockImpl) => {
	if(!obj.hasOwnProperty(method)) throw new Error("Prop does not exist");
  obj[method] = mockImpl;
  return obj;
}

const ArmState = {
	someMethod: () => {console.log("hepp");}
}

ArmState.someMethod()
const mock = createMock(ArmState, 'someMethod', ()=>{ console.log('I am the mock') });
mock.someMethod();
