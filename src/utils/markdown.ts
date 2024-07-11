/**
 * Generates an HTML link to the Ethica website for a given address.
 *
 * @param address - The address to generate the link for.
 * @returns The HTML link to the Ethica website.
 */
export function EthSts(address: string) {
	return `<a href="https://ethica.bc.edu/#/element/${address}" target="_blank"> Ethics ${address} </a>`;
}
