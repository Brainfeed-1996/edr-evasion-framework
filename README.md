# 🔓 EDR Evasion Framework v1.0

## Advanced Endpoint Detection & Response Evasion Toolkit for Red Team Operations & Security Research

**Version:** 1.0 | **Author:** Olivier Robert-Duboille | **Platform:** Windows x64 | **Language:** C++20 | **Type:** Security Research | **Classification:** Red Team Tools

---

## 📋 Table des Matières

### Documentation
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architecture système complète
- **[TECHNIQUES.md](TECHNIQUES.md)** - Catalogue des techniques d'évasion
- **[USAGE.md](USAGE.md)** - Guide d'installation et d'utilisation
- **[API.md](API.md)** - Référence API
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guide de contribution

### Liens Rapides
- [Avertissement](#-avertissement)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Licence](#-licence)

---

## ⚠️ AVERTISSEMENT

> **IMPORTANT**: Ce projet est destiné UNIQUEMENT à des fins éducatives et de recherche en sécurité. L'utilisation de ces techniques sans autorisation explicite est illégale et contraire à l'éthique de sécurité.

- **Red Team Operations**: Tests d'intrusion autorisés
- **Security Research**: Recherche académique
- **Defense Understanding**: Comprendre les attaques pour mieux se défendre

**L'auteur décline toute responsabilité** pour toute utilisation malveillante de ce code.

---

## 🎯 Fonctionnalités

### Évasion EDR (8 catégories, 42+ techniques)

| Catégorie | Techniques | Statut |
|-----------|-----------|--------|
| **Syscall Evasion** | Direct Syscall, Syswhispers, FreshyCalls, TailCall | ✅ |
| **Memory Evasion** | Private Memory Allocation, RWX Elimination | ✅ |
| **Thread Evasion** | Thread Pool Hijacking, APC Injection | ✅ |
| **Process Evasion** | Parent PID Spoofing, PPID Attack | ✅ |
| **AMSI Evasion** | Patch AmsiScanBuffer, Disable AMSI via Registry | ✅ |
| **ETW Evasion** | Patch EtwEventWrite, Disable ETW | ✅ |
| **DLL Evasion** | DLL Unloading, Module Stomping | ✅ |
| **Signature Evasion** | Sleep Obfuscation, Encryption, Padding | ✅ |

### Modules de Recherche

```
├── evasion/                    # Techniques d'évasion
│   ├── syscall/               # Syscall manipulation
│   ├── memory/               # Memory evasion
│   ├── thread/               # Thread injection
│   ├── process/              # Process spoofing
│   ├── amsi/                 # AMSI bypass
│   ├── etw/                  # ETW tampering
│   ├── dll/                  # DLL evasion
│   └── signature/             # Signature evasion
├── hooking/                   # Hooking techniques
│   ├── inline/               # Inline hooking
│   ├── iat/                 # IAT hooking
│   ├── eat/                  # EAT hooking
│   └── syscall/             # Syscall hooking
├── payloads/                  # Payloads d'exemple
│   ├── shellcode/           # Shellcode samples
│   ├── dll/                  # DLL payloads
│   └── exe/                  # Executable templates
└── utils/                    # Utilitaires
```

---

## 🚀 Installation

### Prérequis

```bash
# Windows x64 uniquement
- Visual Studio 2022+ avec C++ Desktop Development
- Windows SDK 10.0.22621+
- CMake 3.16+

# Dépendances
- Boost 1.80+
- Windows Driver Kit (optionnel)
```

### Build

```bash
git clone https://github.com/Brainfeed-1996/edr-evasion-framework.git
cd edr-evasion-framework
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release -A x64
cmake --build . --config Release
```

---

## 📖 Licence

**Usage éducatif et recherche uniquement.** Voir [LICENSE](LICENSE) pour les détails.

---

**⭐ Star ce projet pour suivre les mises à jour!**