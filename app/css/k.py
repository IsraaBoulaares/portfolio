import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from math import pi

def create_environmental_radar_chart():
    """
    Crée un radar chart comparant les impacts environnementaux 
    entre compostage et mise en décharge
    """
    # Données depuis votre fichier CSV
    data = {
        'Impact category': [
            'Land occupation',
            'Human noncarcinogenic toxicity',
            'Freshwater ecotoxicity',
            'Human carcinogenic toxicity',
            'Marine eutrophication',
            'Stratospheric ozone depletion',
            'Marine ecotoxicity',
            'Ionizing radiation',
            'Global Warming',
            'Terrestrial acidification',
            'Ecosystem damage ozone formation',
            'Water consumption',
            'Terrestrial ecotoxicity',
            'Mineral resource scarcity',
            'Human damage ozone formation',
            'Freshwater eutrophication',
            'Particulate matter formation',
            'Fossil resource scarcity'
        ],
        'compost': [
            3.221123438, 29.42145622, 0.038964624, 0.163832955, 0.000344645,
            2.72e-05, 0.109556421, 1434.251948, 1615.512594, 4.833845605,
            0.692510041, 17.01505666, 81.03144771, 0.005823543, 0.431063254,
            0.085188539, 1.491126635, 426.8140654
        ],
        'landfill': [
            1.610571302, 14.7107373, 0.019482361, 0.081916786, 0.000172322,
            1.36e-05, 0.054778259, 717.1302403, 812.0613056, 2.416932662,
            0.346255556, 8.506544802, 40.51573793, 0.00349955, 0.215532358,
            0.04259427, 0.745567089, 213.4076726
        ]
    }
    
    df = pd.DataFrame(data)
    
    # Normalisation des données (0-1) pour chaque catégorie d'impact
    df['max_value'] = df[['compost', 'landfill']].max(axis=1)
    df['compost_norm'] = df['compost'] / df['max_value']
    df['landfill_norm'] = df['landfill'] / df['max_value']
    
    # Configuration du radar chart
    categories = df['Impact category'].tolist()
    N = len(categories)
    angles = [n / float(N) * 2 * pi for n in range(N)]
    angles += angles[:1]  # Fermer le cercle
    
    # Données normalisées
    compost_values = df['compost_norm'].tolist()
    landfill_values = df['landfill_norm'].tolist()
    compost_values += compost_values[:1]
    landfill_values += landfill_values[:1]
    
    # Création du graphique
    fig, ax = plt.subplots(figsize=(12, 12), subplot_kw=dict(projection='polar'))
    ax.plot(angles, compost_values, 'o-', linewidth=2, label='Compost', color='#2E8B57')
    ax.fill(angles, compost_values, alpha=0.25, color='#2E8B57')
    ax.plot(angles, landfill_values, 'o-', linewidth=2, label='Landfill', color='#DC143C')
    ax.fill(angles, landfill_values, alpha=0.25, color='#DC143C')
    
    # Ajouter les étiquettes des catégories
    short_labels = [
        'Land occupation',
        'Human non-carc. tox.',
        'Freshwater ecotox.',
        'Human carc. tox.',
        'Marine eutro.',
        'Ozone depletion',
        'Marine ecotox.',
        'Ionizing radiation',
        'Global Warming',
        'Terrestrial acid.',
        'Ecosystem ozone',
        'Water consumption',
        'Terrestrial ecotox.',
        'Mineral scarcity',
        'Human ozone damage',
        'Freshwater eutro.',
        'Particulate matter',
        'Fossil scarcity'
    ]
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(short_labels, fontsize=9)
    ax.set_ylim(0, 1)
    ax.set_yticks([0.2, 0.4, 0.6, 0.8, 1.0])
    ax.set_yticklabels(['0.2', '0.4', '0.6', '0.8', '1.0'], fontsize=8)
    ax.grid(True, alpha=0.3)
    plt.title('Radar Chart - Midpoint(H) Environmental Impacts\nCompost vs Landfill', 
              size=16, fontweight='bold', pad=20)
    plt.legend(loc='upper right', bbox_to_anchor=(1.3, 1.0), fontsize=12)
    plt.tight_layout()
    plt.show()  # Affiche le graphe

    return fig, df

# ...existing code...

def print_impact_summary(df):
    """
    Affiche un résumé des impacts avec les valeurs réelles et les ratio s
    """
    print("="*80)
    print("RÉSUMÉ DES IMPACTS ENVIRONNEMENTAUX")
    print("="*80)
    # Correction ici : pas de f-string pour la ligne d'en-tête
    print("{:<35} {:<15} {:<15} {:<10}".format("Catégorie d'impact", "Compost", "Landfill", "Ratio C/L"))
    print("-"*80)
    for i, row in df.iterrows():
        category = row['Impact category']
        compost_val = row['compost']
        landfill_val = row['landfill']
        ratio = compost_val / landfill_val if landfill_val != 0 else float('inf')
        print("{:<35} {:<15.3f} {:<15.3f} {:<10.2f}".format(category, compost_val, landfill_val, ratio))
    print("-"*80)
    print("Note: Un ratio > 1 indique que le compostage a un impact plus élevé")
    print("      Un ratio < 1 indique que la mise en décharge a un impact plus élevé")

# ...existing code...
# Utilisation du code
if __name__ == "__main__":
    # Créer le radar chart et afficher le graphe
    fig, df = create_environmental_radar_chart()
    # Afficher le résumé
    print_impact_summary(df)
    # Sauvegarder le graphique si besoin
    # plt.savefig('environmental_impacts_radar_chart.png', dpi=300, bbox_inches='tight')

def load_from_csv(csv_path):
    """
    Charge les données depuis un fichier CSV
    """
    # Lire le CSV en ignorant les premières lignes d'en-tête
    df = pd.read_csv(csv_path, sep=';', skiprows=2)
    # Nettoyer les noms des colonnes
    df.columns = ['UUID', 'Impact_category', 'Reference_unit', 'compost', 'landfill']
    # Convertir les valeurs numériques (remplacer les virgules par des points)
    df['compost'] = df['compost'].astype(str).str.replace(',', '.').astype(float)
    df['landfill'] = df['landfill'].astype(str).str.replace(',', '.').astype(float)
    return df