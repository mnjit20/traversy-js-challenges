function phoneNumberDirectory(str: string[]) {
    const directory = new Map();

    str.map((i) => {
        const [name, phone] = i.split(':');
        console.log(name, phone);

        if (directory.has(name)) {
            directory.set(name, `${directory.get(name)}, ${phone}}`)
        } else {
            directory.set(name, phone)
        }

    })

    console.debug("🚀 ~ phoneNumberDirectory ~ directory:", directory)

}

const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
    'Jane:555-555-5555',
];

const result = phoneNumberDirectory(phoneNumbers);
console.debug("🚀 ~ result:", result)




module.exports = phoneNumberDirectory;
