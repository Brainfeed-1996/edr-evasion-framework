[Live Demo](https://edr-evasion-framework.vercel.app)

# EDR Evasion Framework

A modular framework designed for security researchers to test the detection capabilities of Endpoint Detection and Response (EDR) solutions.

## âš ï¸ Disclaimer

This tool is for educational and authorized security testing purposes only.

## ðŸ› ï¸ Techniques

- **Indirect Syscalls**: Bypassing EDR hooks by invoking syscalls directly.
- **Process Hollowing**: Injecting code into legitimate processes.
- **Module Stomping**: Overwriting legitimate modules in memory.
- **ETW Patching**: Disabling Event Tracing for Windows.

## ðŸ“ Project Structure

- `src/core/`: Core engine for technique orchestration.
- `src/modules/`: Individual evasion modules.
- `include/`: Header files for system definitions.

## ðŸš€ Usage

```powershell
.\edr-evasion.exe --technique indirect-syscall --payload shellcode.bin
```
