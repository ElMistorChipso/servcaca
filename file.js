import os

CLIENT_ID = os.getenv("DISCORD_CLIENT_ID")

if CLIENT_ID:
    invite_link = f"https://discord.com/oauth2/authorize?client_id={CLIENT_ID}&permissions=8&scope=bot%20applications.commands"
    print(f"✅ Lien d'invitation généré : {invite_link}")
else:
    print("❌ Erreur : CLIENT_ID non défini.
