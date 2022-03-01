class ValidationService {  
	isEmailFormatValid = (value: string): boolean => {
		let emailRegex = /^(([^<>()[\]\\.#{}!,$`~*;:\s@"]+(\.[^<>()[\]\\.{},;$#*`!~:\s@"]+)*)|(".+"))@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return emailRegex.test(value);
	};

    validateEmailValue(emailStr: string, errorObject: any, fieldToPassError: string): boolean {
		if (!this.isEmailFormatValid(emailStr)) {
				errorObject[fieldToPassError] = "Invalid email format"
				return false;
			}
        errorObject[fieldToPassError] = ""
		return true;
	}

}

export const validationService = new ValidationService();