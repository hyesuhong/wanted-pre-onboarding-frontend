import { useEffect, useState } from 'react';

const useValidator = <T>(value: T, validator: (value: T) => boolean) => {
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		setIsValid(validator(value));
	}, [value, validator]);

	return isValid;
};

export default useValidator;
