import discord
import os

TOKEN = os.getenv("DISCORD_BOT_TOKEN")  # Récupère le token depuis Render

if not TOKEN:
    print("❌ Erreur : DISCORD_BOT_TOKEN non défini. Ajoute-le dans les variables d’environnement Render.")
    exit()

intents = discord.Intents.default()
bot = discord.Client(intents=intents)

@bot.event
async def on_ready():
    print(f"✅ Connecté en tant que {bot.user}")

bot.run(TOKEN)
