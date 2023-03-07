# Blursed Bot

## Installation and first run
1. `yarn`
2. Copy `config.example.ts` and rename it to `config.ts`
3. Set the `PASSWORD` and `SEED` variables (mandatory)
4. Check out the setup with `yarn profile`. If everything is all right, you will see your Profile page and TallyHo extension with your `SEED` and `PASSWORD`. There you can top up the balance and manage bids.
5. Start the bot with `yarn start`. Wait until the collections in `config.ts` are open. Check out the logs folder. You can safely refresh and use the first Profile tab to check your points and bids.

### Be cautious. DOs and DONTs:
- **The project overall is dangerous**. Please do not leave it alone for long, or you may lose your funds.
- Do not use your main wallet.
- Read Blur updates.
- See the RAM on your PC.
- Captcha solving is not tested. I recommend using your home IP, a good VPN, or residential proxies to pass CloudFlare's protection.
- The ladder strategy can be unstable. Consider using the base strategy if you don't understand the code; it's safer.