const Pet = require('../src/pet');
describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('has a initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('has a initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increases age/hunger/fitness by n', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.feed();
        expect(pet.hunger).toEqual(2)
    });

    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    it('returns pet status', () => {
        const pet = new Pet('Fido')
        pet.hunger = 4
        pet.fitness = 4
        pet.checkUp();
        expect(pet.checkUp()).toBe("Feeling good!")
    });

    it('returns pet status', () => {
        const pet = new Pet('Fido')
        pet.hunger = 8;
        pet.fitness = 1;
        pet.checkUp();
        expect(pet.checkUp()).toBe("Feed me and walk me!")
    });
    
    it('returns pet status', () => {
        const pet = new Pet('Fido')
        pet.hunger = 6
        pet.fitness = 4
        pet.checkUp();
        expect(pet.checkUp()).toBe("Feed me!")
    });

    it('returns pet status', () => {
        const pet = new Pet('Fido')
        pet.hunger = 4
        pet.fitness = 1
        pet.checkUp();
        expect(pet.checkUp()).toBe("Walk me!")
    });
});