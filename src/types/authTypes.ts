interface Session extends SessionAttributes {
	id: string;
	userId: string;
	expiresAt: Date;
	fresh: boolean;
}